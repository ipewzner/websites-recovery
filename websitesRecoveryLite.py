import os
import time

TIME_DELAY = 60 * 5 # 5 minutes
WEBSITE = 'https://www.oref.org.il//12481-he/Pakar.aspx'
BROWSER = 'microsoft-edge'

#Function that open website in edge browser and close it after 5 minutes
def open():
    #run cmd 
    os.system("start "+BROWSER+":"+WEBSITE)
    time.sleep(TIME_DELAY)
    #close edge
    os.system("taskkill /f /im msedge.exe")

while True:
    open()
    