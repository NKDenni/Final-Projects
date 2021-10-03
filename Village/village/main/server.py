from django.shortcuts import render

@app.route("/username", methods=['POST'])
def username():
    found = False
    mysql = connectToMySQL('main')        # connect to the database
    query = "SELECT email from users WHERE users.email = %(user)s;"
    data = {'email': request.form['email']}
    result = mysql.query_db(query, data)
    if result:
        found = True
    return render_template('partials/emailcheck.html', found=found)
