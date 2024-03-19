from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import vertexai
from vertexai.language_models import TextGenerationModel


@api_view(['GET'])
def test(request):
    vertexai.init(project="617430470115", location="europe-west2")
    parameters = {
        "candidate_count": 1,
        "max_output_tokens": 1024,
        "temperature": 0.2,
        "top_p": 0.8,
        "top_k": 40
    }
    model = TextGenerationModel.from_pretrained("text-bison@001")
    model = model.get_tuned_model("projects/617430470115/locations/europe-west2/models/58010233481461760")
    response = model.predict(
        """This applicant is applying for an Apple Developer position. Their CV highlights a Bachelor\'s degree in Bilgisayar Mühendisliği from a reputable university and 4 years of experience as a iOS Developer at a mobile app development company. They possess strong skills in Swift, Objective-C, Xcode, and Git. Is this applicant is suitable for the backend deceloper position?""",
        **parameters
    )
    print(f"Response from Model: {response.text}")
    return Response(response.text)
# Create your views here.
