Launch the ASP.NET project first, and then the React one in Visual Studios. You may need to check your connection string in appsettings.json.
  To begin, click on the run IIS button near the top

In the React Project, you might have to change the URL that performs the Get request so that it's the same as the one from the ASP.NET Project.
  To begin just run "npm start" in the terminal

The settings are to not display any web page, so you might have to look in Debug>CrossroadApp Debug Properties>Debug>App URL in Visual Studios.

When you run the React project, it might ask you to install some missing dependencies I believe, in which you also say yes.

If both are running correctly, you'll hopefully see an input form. Just type a movie name and hit enter and it'll try to find it for you.

Hitting enter with no input results in a cancelled search, which is to be expected for this program.
