# Project Overview

## Project Name

Plan Your National Park Visit


## Project Description

This web site will assist anyone planning to visit a National Park in the US.  The user will be able to locate a National Park by state or activity using drop down lists.  A list of parks will then be returned to the user.  They can click on the park name and a description of the park, a list of activities and an image will be returned. 


## API and Data Sample
I will be using the API provided by the National Parks Service, https://developer.nps.gov/api/v1/parks?activity=CA&api_key=gvphhiHHG97vMhTNAeRfJpBHEPlctO6jPByPu0ji  
Below is an example of the JSON:
```
{
total: "497",
limit: "50",
start: "0",
data: [
{
id: "77E0D7F0-1942-494A-ACE2-9004D2BDC59E",
url: "https://www.nps.gov/abli/index.htm",
fullName: "Abraham Lincoln Birthplace National Historical Park",
parkCode: "abli",
description: "For over a century people from around the world have come to rural Central Kentucky to honor the humble beginnings of our 16th president, Abraham Lincoln. His early life on Kentucky's frontier shaped his character and prepared him to lead the nation through Civil War. The country's first memorial to Lincoln, built with donations from young and old, enshrines the symbolic birthplace cabin.",
latitude: "37.5858662",
longitude: "-85.67330523",
latLong: "lat:37.5858662, long:-85.67330523",
activities: [
{
id: "13A57703-BB1A-41A2-94B8-53B692EB7238",
name: "Astronomy"
},
```

## Wireframes

![Wireframe] (https://wireframe.cc/udm8RG)


#### MVP 
I'll allow user to search for National Parks by state using the NPS API  
Using the list created by the state search, the user can select a park  
The page will display the park name, an image, the descrition of activities available

#### PostMVP  
Each park will display the directions to the park
Each park will display multiple images with a mouse click
Each park will display the park map

## Project Schedule

```
|  Day | Deliverable                                        | Status      
|Nov 9 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 10| Project Approval                                   | Complete
|Nov 12| Core Application Structure (HTML, CSS, etc.)       | Complete
|Nov 13| Pseudocode / actual code                           | Complete
|Nov 16| MVP                                                | Complete
|Nov 17| Presentations                                      | Complete
```
## Priority Matrix
 
<img src = "./matrix.png>

## Timeframes
```
| Component                | Priority| Estimated Time | Time Invested| Actual Time|
| -------------------------|:--------:|:-------------:|:------------:|:----------:| 
| HTML structure           | H        |  1hr          |   1hr        |   1hr      |
| HTML links               | H        |  2hr          |   1.5hr      |   1.5hr    | 
| HTML buttons             | H        |  2hr          |   1hr        |   1hr      |
| HTML images              | H        |  1hr          |   1hr        |   1hr      |
| css background imgs      | H        |  3hr          |   2hrs       |   2hrs     |
| css image layout         | H        |  3hr          |   4hrs       |   4hrs     |
| Build state code data    | H        |  3hr          |   2.5hr      |   2.5hr    |
| JS Create loops for parks| H        |  4hr          |   4hrs       |   4hrs     |
| JS images for parks      | H        |  2hr          |   1.5hr      |   1.5hr    |
| JS Create links          | H        |  4hr          |   3hrs       |   3hrs     |

```

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

You will be building out a website listing all of the National Parks.

The layout of the page with be the following:

![](https://i.imgur.com/LfMFyCF.png)


### Part I: React Router

Read more on [part-i.md details](part-i.md)

Start by building out the app using React, React Router, and the static data
provided in [`parks.json`](./parks.json). Get the site working
with this static data, then integrate with the [National Parks
API](https://www.nps.gov/subjects/developer/index.htm) and make it look like the
mock. For now, just pass the data around and create an MVP version with minimal
styling so you know it's working.

Your root level component (`App`) should hold all the data for the application
and pass it down to the different pages, as necessary.

### Part II: Adding APIs

Read more on [part-ii.md details](part-ii.md)

Once you have it working with the static data, get it working with the
[National Parks API](https://www.nps.gov/subjects/developer/index.htm).

You should only need to add an Fetch request that sets the API response data to
state.

### Part III [Make it look like the mock](https://drive.google.com/file/d/1DJS8ysB1N9Kp89_V_loagQiFNU_4jZoN/view?usp=sharing)

Now that all your data and pages are in place, make your site look like the
provided mock.

## Resources

- [React Router Lesson Plan](https://git.generalassemb.ly/SEIR-224/react-router)
- [`<Route render={ ... } />`](https://reacttraining.com/react-router/web/api/Route/render-func)
  vs
  [`<Route component={ ... } />`](https://reacttraining.com/react-router/web/api/Route/component)

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
