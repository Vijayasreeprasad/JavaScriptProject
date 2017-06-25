# JavaScriptProject
ABOUT THE PROJECT

The SOLAR CALCULATOR is developed using Javascript, CSS and HTML. Mainly focussing on basics of HTML, CSS and Javascript Functions, Loops, Switch statements and gathering information from DOM. Its a simple project where in user can perform fundamental mathematical calculations.

How the SOLAR CALCULATOR works?

There are three things we need to get from the homeowner. 
First is how much electricity the home uses on average. This is calculated in kilowatts per hour.
Second is how much sunlight they typically receive per day.
Finally, the homeowner needs to choose a solar panel.
Each panel generates different amounts of energy. Solar panels are rated by how many watts they generate per hour, which is different than the kilowatt rating used by the home.

First we gather the last 12 months of power usage from the form inputs and add them together, then we divide by 365 days, and this gives us the average kilowatts used per day.

Next we find out what zone the homeowner lives in and get the number of hours of sunshine per day. Then we divide the home's daily need by the number of sunshine hours to see what we need to generate per hour.Then we have to adjust for bad weather that blocks the sun, so we increase the need by 25%.Then we multiply the kilowatts needed by 1,000 to get watt hours, remember this is how panels are rated. Then we find out which panel the homeowner would like to use. This tells us how many watts that panel can generate in a single hour of sun.

Finally,we divide to see how many panels are needed to offset 100% of the electrical needs for the home. Let's see this in code.
