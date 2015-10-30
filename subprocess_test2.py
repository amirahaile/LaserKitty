import subprocess

# TESTING HOW TO CHECK IF THE USTREAM FILE IS CURRENTLY RUNNING

#subprocess.Popen("sudo ~/ustream", shell=True)

ps = subprocess.Popen(["ps -e | grep jfeljfe"],
                             stdout=subprocess.PIPE,
                             shell=True,
                             universal_newlines=True)

#grep = subprocess.Popen(["grep", "python3"],
                        #stdin=ps.stdout,
                        #universal_newlines=True,
                        #stdout=subprocess.PIPE)

output = ps.communicate()[0]
#[0].strip()

# returns a string if something was found
# returns an empty string if nothing was found 
print(output)

#subprocess.Popen("sudo killall -9 avconv", shell=True)
