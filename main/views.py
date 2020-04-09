from django.shortcuts import render
from reportlab.pdfgen import canvas    
from django.http import HttpResponse

from azure.storage.blob import blockblobservice
from django.conf import settings as djangoSettings

from mimetypes import guess_type
from PIL import Image
import base64
import urllib.request
import io
import requests
import json
import os
#import matplotlib.pyplot as plt

# Create your views here.

def json_img(payload):
    scoring_uri = "<Replace-with-your-scoring_uri>"
    header = {"Content-Type": "application/json"}
    dd = json.dumps(payload)
    response = requests.post(scoring_uri,data=json.dumps(payload), headers=header, verify=False)
    result = response.text
    return result

def test(request):
        
    return render(request=request,
                  template_name = "main/test.html"
                  )   
    
def homepage(request):
 
    return render(request=request,
                  template_name = "main/login.html"
                  )
def inventory(request):
        
    return render(request=request,
                  template_name = "main/inventory.html"
                  )     
def stockyard(request):
        
    return render(request=request,
                  template_name = "main/stockyard.html"
                  )     
def profile(request):
        
    return render(request=request,
                  template_name = "main/profile.html"
                  )     
def reports(request):
        
    return render(request=request,
                  template_name = "main/reports.html"
                  )     
def plan(request):
        
    return render(request=request,
                  template_name = "main/plan.html"
                  )     
def forecasting(request):
        
    return render(request=request,
                  template_name = "main/forecasting.html"
                  )       
def stockyardsliced(request):
        
    return render(request=request,
                  template_name = "main/stockyardsliced.html"
                  )         

def maps(request):
        
    return render(request=request,
                  template_name = "main/maps.html"
                  )                  

def forecastinglime(request):
        
    return render(request=request,
                  template_name = "main/forecastinglime.html"
                  )

def forecastingcoal(request):
        
    return render(request=request,
                  template_name = "main/forecastingcoal.html"
                  )

def new(request):
        
    return render(request=request,
                  template_name = "main/new.html"
                  )                  
                  
def plansummary(request):
        
    return render(request=request,
                  template_name = "main/plansummary.html"
                  )
def reports(request):
        
    return render(request=request,
                  template_name = "main/reports.html"
                  )
				  
def report1(request):
	response = HttpResponse(content_type='application/pdf')
	response['Content-Disposition'] = 'attachment; filename="report1.pdf"'

	document_width, document_height = (600,700)
	
	path = "main/img/report1.png"
	
	Image_file = Image.open(path)
	
	image_width, image_height = Image_file.size
	image_aspect = image_height / float(image_width)
	
	print_width = document_width
	print_height = document_width * image_aspect
	
	p = canvas.Canvas(response)
	p.setFont('Times-Roman',18)
	p.drawString(170,750,"Report for stockpile ID SA-D-101")
	p.drawImage(path, document_width - print_width, document_height - print_height, width=print_width, height=print_height)
	
	p.save()
	return response
	
	
def report2(request):
	response = HttpResponse(content_type='application/pdf')
	response['Content-Disposition'] = 'attachment; filename="report2.pdf"'

	document_width, document_height = (600,750)
	
	path = "main/img/report2.png"
	
	Image_file = Image.open(path)
	
	image_width, image_height = Image_file.size
	image_aspect = image_height / float(image_width)
	
	print_width = document_width
	print_height = document_width * image_aspect
	
	p = canvas.Canvas(response)
	p.setFont('Times-Roman',18)
	p.drawString(170,750,"Report for stockpile ID SA-D-102")
	p.drawImage(path, document_width - print_width, document_height - print_height, width=print_width, height=print_height)
	
	p.save()
	return response
	

def report3(request):
	response = HttpResponse(content_type='application/pdf')
	response['Content-Disposition'] = 'attachment; filename="report3.pdf"'

	document_width, document_height = (600,750)
	
	path = "main/img/report3.png"
	
	Image_file = Image.open(path)
	
	image_width, image_height = Image_file.size
	image_aspect = image_height / float(image_width)
	
	print_width = document_width
	print_height = document_width * image_aspect
	
	p = canvas.Canvas(response)
	p.setFont('Times-Roman',18)
	p.drawString(170,750,"Report for stockpile ID SA-D-103")
	
	p.drawImage(path, document_width - print_width, document_height - print_height, width=print_width, height=print_height)
	
	p.save()
	return response
	

def report4(request):
	response = HttpResponse(content_type='application/pdf')
	response['Content-Disposition'] = 'attachment; filename="report4.pdf"'

	document_width, document_height = (600,750)
	
	path = "main/img/report4.png"
	
	Image_file = Image.open(path)
	
	image_width, image_height = Image_file.size
	image_aspect = image_height / float(image_width)
	
	print_width = document_width
	print_height = document_width * image_aspect
	
	p = canvas.Canvas(response)
	p.setFont('Times-Roman',18)
	p.drawString(170,750,"Report for stockpile ID SA-D-104")
	p.drawImage(path, document_width - print_width, document_height - print_height, width=print_width, height=print_height)
	
	p.save()
	return response

def stockyardprocessed(request):

    """account_name = '<Replace-with-your-account_name>'
    account_key = '<Replace-with-your-account_key>'
    path = "<Replace-with-the-path-to-your-container>"

    obj = blockblobservice.BlockBlobService(account_name,account_key)
    gen = obj.list_blobs(container_name='test')
    names = []
    prop = []
    for blob in gen:
        names.append(blob.name)
        prop.append(blob.properties.last_modified)
    latest = names[prop.index(max(prop))]
    path = path+latest""" ##FOR DYNAMIC IMAGE PROCESSING, USE THE ABOVE CODE AND COMMENT THE PATH BELOW

    path = "<Replace-with-the-path-to-your-image>"
    with urllib.request.urlopen(path) as url:
        f = io.BytesIO(url.read())
        path = base64.b64encode(f.read())
        img = path.decode('utf-8')
            
    #Change the hexColours as required
    hexColours = [["#140303", "#240004", "#630214", "#2d1014", "#3b0505"], ["#ded3d1", "#baaaad", "#9b837d", "#958389"], ["#110d0f", "#040101", "#0f0b08", "#090a0c", "#040404"]]
    diff = 40
    payload = [{"hexcolours": hexColours[0], "path": img, "diff": diff}, {"hexcolours": hexColours[1], "path": img, "diff": diff}, {"hexcolours": hexColours[2], "path": img, "diff": diff}]
    raw_materials = ["IronOre", "Limestone", "Coal"]
    
    #os.remove(djangoSettings.STATIC_ROOT+"/main/img/yard1.jpg")
    
    context = dict()
    for i in range(3):
        file = djangoSettings.STATIC_ROOT+"/main/img/"+raw_materials[i]+".png"
        #filenames[raw_materials[i]] = "main/img/"+raw_materials[i]+".png"
        os.remove(file)
        result = json_img(payload[i])
        fh=open(file, "wb")
        #fh = open(raw_materials[i]+".png", "wb")
        data = base64.b64decode(result)
        fh.write(data)
        fh.close()
        
        
        with open(file, "rb") as f:
            data = f.read()
 
        encoded = base64.b64decode(data)
        content_type, encoding = guess_type(file)
        context[raw_materials[i]] = data
        #.decode('utf-8').strip()
        #return "data:%s;base64,%s" % (content_type, encoded)
        
        """if(file_name!=latest):
        root_path = '<Replace-with-the-path-to-your-local-directory>'
        dir_name = 'images'
        path = f"{root_path}/{dir_name}"

        account_name = ''
        account_key = ''
        container_name = ''

        block_blob_service = blockblobservice.BlockBlobService(
            account_name=account_name,
            account_key=account_key
        )

        blob_name = f"{dir_name}/{file_name}"
        file_path = f"{path}/{file_name}"
        block_blob_service.create_blob_from_path(container_name, blob_name, file_path)"""
        """img=plt.imread(raw_materials[i]+".png")
        imgplot = plt.imshow(img)
        plt.show()""" ## TO UPLOAD GENERATED IMAGE TO AZURE CONTAINER

    return render(request=request,
                  template_name = "main/stockyardprocessed.html",
                  context = context
                  )                  