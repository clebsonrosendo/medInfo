import os
from flask import Flask, render_template, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
from markupsafe import escape

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


UPLOAD_FOLDER = '/files/uploads/'
ALLOWED_EXTENSIONS = {'xlsx'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files
        bla = 'vb'
        # filename = secure_filename(file.filename)
        print(file)
        return f"Hello, {escape(file)}!"
    return "<p>Erro</p>"




if __name__ == "__main__":
    app.run()
