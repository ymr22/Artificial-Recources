import os
import google.generativeai as genai

os.environ['GOOGLE_API_KEY'] = "AIzaSyBoeSpMEPwm1BLkcxW-7jgUE_9prvromWY"
genai.configure(api_key = os.environ['GOOGLE_API_KEY'])

model = genai.GenerativeModel('gemini-pro')


def generate_answer(question):
    response = model.generate_content(question)
    return response


