from flask import Flask, request, jsonify # fron to back end communications 
from flask_sqlalchemy import SQLAlchemy # for the database 
from werkzeug.security import generate_password_hash, check_password_hash # for security 
from flask_cors import CORS 
import os # opening and closeing along with other standard operations 

app = Flask(__name__)

# Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app) # all of this is from SQLALCHEMY 
CORS(app)

# User Model
class User(db.Model): # create a class named it user the user class is taking in db.Model
    id = db.Column(db.Integer, primary_key=True)  
    username = db.Column(db.String(80), unique=True, nullable=False)  # checking to see user id has any maches
    email = db.Column(db.String(120), unique=True, nullable=False) # checking the email even though the user is not required to use it
    password_hash = db.Column(db.String(128)) # each passwoard has a hash number  
     
    def set_password(self, password): # this takes the password from the user and  generates a hash 
        self.password_hash = generate_password_hash(password) # stores the password 

    def check_password(self, password): # checking the pasword ssosiatign it with the database 
        return check_password_hash(self.password_hash, password)  # return the results to the database we are done intering into it

# Function to create the database
# if find this to be a good practive with databases and things like that. instead of creatign the model and and then have the prgram find and work with it 
# we just create the database here as the prgram spins up. the function will check if a database exists and if not it creates one.   
def create_database():
    with app.app_context():
        if not os.path.exists('users.db'): 
            db.create_all() # the code speaks for its self 
            print("Database created.") # the code speaks for its self 
        else:
            print("Database already exists.") # the code speaks for its self 

# User Registration Route

@app.route('/register', methods=['POST']) # @app.route is a communication path this takes the information the user inters in the registration page. 

def register(): # we are colection the information so it can be placed in the database. 
    data = request.json 
    username = data['username'] # collection for the front end
    password = data['password'] # collection for the front end
    email = data['email']  # Capture the email from the request

    if User.query.filter_by(username=username).first(): # if the user is aready registered in the database we print that message in the CMD the user will not see it
        return jsonify({'message': 'User already exists'}), 409 # this is an error code for testing

# after the if statment is passed we can now att the information into the database 
    new_user = User(username=username, email=email)  # Include email when creating the user
    new_user.set_password(password) # finally adding 
    db.session.add(new_user) # finally adding
    db.session.commit() # send it. 

    return jsonify({'message': 'User registered successfully'}), 201 # tell me in the cmd that we added an entry. 

# User Login Route
# this is conected to the front end on the log in page we type in are crdentalls  and the @app.route is the path the data takes fron the fron end to the back end 
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data['username'] 
    password = data['password']

    user = User.query.filter_by(username=username).first() # here we go into the users class and basically go through the list that is our DB
    if user and user.check_password(password): # check if it true or not 
        return jsonify({'message': 'Login successful'}), 200 # cmd messages for testign 
    else:
        return jsonify({'message': 'Invalid username or password'}), 401 # cmd messages for testign

if __name__ == '__main__': #  this is the start of the prgram 
    create_database()  # Initialize the database
    app.run(debug=True) # kee pthe app running. 
