# LaserKitty Capstone

I have one roommate – she is a cat. We live in a microapartment; a cramped studio of 209 sqft. Attending Ada takes me away from my home, and her, for a minimum of eight hours a day.

To keep her brain stimulated and occupied, I'm going to build her a laser toy she can play with—and I can control in the browser—when I'm not home. It will (time permitting) also help me track her activity and log it for review.

<!-- Possible feature(s): give out codes to let my friends play with my kitty (with restricted times) -->

# Product Plan

## Problem Statement

My cat is over-grooming out of boredom. I can't be with her for upwards of eight hours of the day (not including when I'm sleeping). She's a young kitty that need stimulation and activity. There are good laser toys on the market, but they run upwards of $100 and I have the skill set to build my own.

## Market Research

+ [iPet Companion](http://ipetcompanion.com/shelters/oregon-humane-society)
  - remotely watch and play with shelter kitties
  - Features: live streaming video, capture and share photos, camera control, control multiple toys, chat with players in queue
+ [Kittyo](http://kittyo.com/) - $249
  - Features: treat dispenser, camera, mount, WiFi connected, smartphone app controller, record & share video, speaker, sound announcement
  - [Kickstarter](https://www.kickstarter.com/projects/kittyo/kittyo-play-with-your-cat-even-when-youre-not-home/description)
+ [Petcube](https://www.kickstarter.com/projects/petcube/petcube-stay-closer-to-your-pet/description) - $199
  - Features: camera, microphone, WiFi connected, smartphone app controller, share and save HD videos & photos, share access with friends & family
+ [Obi](https://www.kickstarter.com/projects/danprovost/obi-a-smart-laser-toy-for-pets) - $100
  - Features: smartphone controller (iOS), WiFi connected, automatic/manual modes, sound announcement, customizable behavior
+ [Shru](https://www.kickstarter.com/projects/1046165765/egg-the-intelligent-cat-companion/description) - $79
  - Features: chirp sounds, erratic movements, USB rechargeable, play modes, USB interface, adjust settings: sound type, volume, play mode, and play duration
+ [Dart Automatic Pet Laser Toy](https://www.thinkgeek.com/product/dcd0/) - ~$27-45
  - Features: variable speed settings, adjustable timer shut-off, 16 play combinations, 360 deg laser patterns


## User Personas  

Pet owners who work full-time or spend a lot of time away from home are the target user. These owners care a great deal about their pet to build/buy a high-tech toy, so it's likely that they'd want a report of its impact on their pets' health and exercise. If time permits, I'll keep track of the time and duration of play for the user to view in the browser. Pet owners, like parents, love to show off their children. Sharing snapshots or recordings of the (potentially) streaming video and/or sharing access to the remote robot with friends could be a feature of the web app.

## Technologies

### Complex Integrations
_Minimum of 2_  

+ Background/Asynch jobs (e.g. email confirmation)
+ Raspberry Pi hardware
+ Third-party OAuth

### Advanced Features
_Minimum of 2_  

+ Secure Socket Layer (SSL)
+ Internationalization (i18n)
