from django.shortcuts import render
import geocoder 
import wikipedia as wk

def find_ip_address(ips = 'me'):
    try:
        return (geocoder.ip(ips)).json
    except:
        return find_ip_address()    
def get_url(keyword):
    links = wk.search(keyword)
    page = wk.page(links[1])
    return page.url
#http://maps.google.com/maps?q=24.197611,120.780512
API_KEY = open('key.txt','r').read()
#https://maps.google.com/?q=<lat>,<lng>
def get_map_url(lat,lng):
    try:
        return f'https://www.google.com/maps/embed/v1/place?key={API_KEY}&q={lat},{lng}'
    except:
        return f'https://www.google.com/maps/embed/v1/place?key={API_KEY}&q='
def index(request):
    if 'ip_address' in request.POST:
        data = find_ip_address(request.POST['ip_address'])
    else:
        data = find_ip_address()
    try:
        map_url = get_map_url(data['lat'],data['lng'])            
        page_link = get_url(f"{data['city']} in {data['country']}")
    except :
        map_url = f'https://www.maps.google.com'
        page_link = 'https://www.wikipedia.org'
    return render(request,"index.html",{"data":data,'page_link':page_link,'map_url' : map_url})    