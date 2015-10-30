import subprocess
import time
import signal
import os

# TESTING SUBPROCESS COMMANDS

#p = subprocess.call("python ~/dev/LaserKitty/pattern1.py", shell=True)
#q = subprocess.call("sudo ~/ustream", shell=True)

#print(p)

print("Recording...")
p = subprocess.Popen(["/home/pi/ustream"],
                     #close_fds=True,
                     start_new_session=True)

print("Shutting down in...")
for i in range(3, 0, -1):
    print(i)
    print("Polling returns: %s" %p.poll())
    time.sleep(1)

# would have liked to kill the process directly
# with the PID or the subprocess object
# but `kill()` and `terminate()` were not responding
# as well as another `Popen` command
#Popen("sudo killall -9 avconv", shell=True)


print("Polling returns: %s" %p.poll())


print("PID: %s" %p.pid)
print("Killing process.")
p.terminate() # kills the parent process
os.killpg(p.pid, signal.SIGKILL) # kills child processes

# returning "None" means the process hasn't ended
# returns a 1 if the webcam is already streaming
# returns -N when signal N kills it
print("Polling returns: %s" %p.poll()) #only responsds if parent process is killed 
