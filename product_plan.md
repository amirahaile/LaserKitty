# Dream Diary Capstone

Users will be able log their dreams in an online journal that also parses each entry for interpretation keywords. I will be making and utilizing and separate API that acts as the dream dictionary. Each interpretation keyword in the dream entry will be highlighted and offer a sentence of its meaning as a hover effect.

Additional features _may_ include:  
+ A space to log the interpretations of your dreams
+ Buttons to share or cross-post your dream and/or interpretation to social media platforms and blogs
+ Text in your dream entry
+ Track your mood by journal entry
+ Submit a voice recording of your dream that's annotated into a written entry
+ Text reminder to log your dream
+ Tag dream entries


# Product Plan

## Problem Statement

## Market Research

__Dream Journals__
+ [Dream Moods](https://play.google.com/store/apps/details?id=com.itgc.dreammoods.ui&hl=en) _(Android logging app)_
+ [iDream](https://itunes.apple.com/us/app/idream-dream-interpreter-journal/id408076503?mt=8) _(most similar to my proposed project)_
+ [Dream Diary](https://play.google.com/store/apps/details?id=com.devmys.dreamdiary&hl=en)
+ [Lucidpedia](http://www.lucidipedia.com/dream-journal/)

__Dream Dictionaries__    
I plan on utilizing a dream dictionary in my capstone. I'll be scraping the website(s) for its dictionary content and turning the gathered data into an API my web app can access.  
+ [Dream Moods](www.dreammoods.com/dreamdictionary/) _(top choice)_
+ [Dream Bible](http://www.dreambible.com/)
+ [Dream Dictionary](http://www.dreamdictionary.org/) _(not the best interpretations)_
+ [DreamsCloud](www.dreamscloud.com/dream-dictionary) _(not great for scraping)_
+ [Amy Cope's Dream Dictionary](http://amycope.com/dream-dictionary/) _(not thorough)_
+ [Horoscope.com](http://www.horoscope.com/horoscope/resources/dream-dictionary.aspx?part=1) _(pretty good; strangely structured)_
+ [Dream Dictionary](http://dream.dictionary-dream.info/) _(hit and miss on interpretations)_
+ [Brilliant Dreams](http://www.brilliantdreams.com/dream-dictionary/dream-dictionary-a.htm)



## User Personas  

I plan on building my web app with accessibility in mind, so most anyone will be able to use it. This app would be most applicable to those who enjoy tracking and interpreting their dreams.

## Technologies

### Complex Integrations
_Minimum of 2_  

+ Background/Asynch jobs (e.g. email confirmation)
+ Ember? Angular? Backbone? (i.e. front-end framework)
+ Third-party OAuth

### Advanced Features
_Minimum of 2_  

+ Secure Socket Layer (SSL)
+ Internationalization (i18n)
+ Open Public API
