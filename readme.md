#



## Installation & Setup

feel free to follow these steps and create a free blogging website leveraging the technologies of [Github](//github.com), [Spike](//spike.cf), [Netlify](//netlify.com), and [DatoCMS](//datocms.com)

first i will provide a brief overview of the steps i make to public a website:

  1. DatoCMS
      1. create a new site
      1. create a Page model
          1. create an About Page
          1. create a Contact Page
      1. create a Post model
          1. create a Blog post
  1. Netlify
      1. create a new site from my Technomad Github repo
      1. link to DatoCMS
          1. Tokens
          1. Hooks
  1. publish from DatoCMS

i want this to be available to anyone of any skill level, so i took the time to type out a beginning-to-end walkthrough.

I can do this in my sleep so feel free to contact me if youre stuck or if you want me to set it up for you.


if youre doing it yourself, you will need a [Github](//github.com) account

either way you will need a [DatoCMS](//www.datocms.com) account

directions:

1. ### use DatoCMS to create your Site
    1. click Create New Site
    1. for Static Site Generator, select Other and Continue
    1. Name your Project whatever you want, and click Create

1. ### Setup DatoCMS
    1. #### give our site pages
        1. click either big button that says Enter Administration Area
        1. follow the arrow and click the big blue plus
        1. Name this `Page` **[case is important]** and Save
        1. click the big button Add Field
            1. click Text, click Single-line string
            1. at the top click Validations and check Required and Unique field
            1. at the top, click back to Settings, and for the Name, retype `Title` **[case is important]** and Save
        1.  Add another Field
            1. click Text, click Multiple-paragraph text
            1. again at the top click Validations, and check Required
            1. at the top click back to Settings, as the Name, put in `Content` **[case is important]**, and Save
        1. at the top, next to your Site Name, you should have a new option called Content, click it
        1. on the left menu, click Pages, and follow the arrow clicking the big blue plus at the bottom to add a Page, we are going to make 2
            1. the 1st page's title will be `about` [case is important], and its content is whatever you want on your about page. click save
            1. create a 2nd page and title it `contact` [case is important], and it content field will be whatever you want on our contact page. click save.
    1. #### give our site a blog
        1. like above where we created a page model and put in an about page and a contact page, we are now going to create a post model, and create a blog post.
        1. on the top menu click Settings, on the left menu click Models, click the Big Blue Plus to add a new model, name it `Post` **[case is important]**, and click save.
        1. add field to this model, Text, Single-line string, at the top click Validations, and check Required and Unique field, click back to Settings and for the title retype `title` **[case is important]**, before saving.
        1. add a 2nd field to the post model, Text, Multiple-paragraph text, set the title to `content` **[case is important]**, at the top click Validations, and check Required, and Save
        1. at the top, navigate back over to content to see a new Posts link, click on it, and click on the Big Blue Plus to add a Post.
        1. for both the title and the content you can put whatever you want. **[important:]** in the title use either `-`s or `_`s instead of spaces
        1. create and save a blog post or two.
    1. #### copy our Read-only API token
        1. at the top menu click Settings, on the left menu click API Tokens, and click copy next to the Read-only API Token, we will paste this in the next step.

1. ### setup/link Netlify & DatoCMS
    1. [click this link to deploy your site to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/wommy/technomad_spike_datocms)
        1. login using your Github account
        1. everything should already be filled out for you, except one field, where you paste in DatoCMS's Read-only API Token we copied above
    1. while thats working, go back to your DatoCMS site
        1. at the top menu click Settings, on the left menu click Deployment Settings, click Production, and click on the big turquoise Netlify diamond, walk through its steps, and make sure to Save after
        1. click on the new Publish Changes button at the top right corner of the screen
    1. once its done, navigate back to your site on Netlify. under the wacky generated name, click the url to see your new live site!
