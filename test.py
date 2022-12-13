import os
import time

#Function that open website in edge browser and close it after 5 minutes
def open():
    #run cmd 
    os.system("start microsoft-edge:https://www.oref.org.il//12481-he/Pakar.aspx")
    #wait 5 minutes
    time.sleep(60*5)
    #close edge
    os.system("taskkill /f /im msedge.exe")

while True:
    open()
    