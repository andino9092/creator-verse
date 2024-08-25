# WEB103 Prework - Creator Verse

Submitted by: Andy Li

About this web app: Simple app displaying my favorite content creators and allowing for CRUD operations on creators

Time spent: 6.5 hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [O] **A logical component structure in React is used to create the frontend of the app**
- [O] **At least five content creators are displayed on the homepage of the app**
- [O] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [O] **API calls use the async/await design pattern via Axios or fetch()**
- [O] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [O] **Each content creator has their own unique URL**
- [O] **The user can edit a content creator to change their name, url, or description**
- [O] **The user can delete a content creator**
- [O] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [O] Picocss is used to style HTML elements ( I used Tailwind if that is alright)
- [O] The content creator items are displayed in a creative format, like cards instead of a list
- [O] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

- Allowed user to just click on entire card instead of having an information button to be brough to the whole page
- Handled overflow of text in home page in cases where the description was too long. 


## Video Walkthrough (This is a walkthrough of website)

Here's a walkthrough of implemented required features:

👉🏿<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  👉🏿 GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I have used ReactRouter very little so it was somewhat difficult to use it here. Most of the instances I developed apps with routes was using NextJS and they had their own built in routing. Still, it was very nice to learn more about simply React and how to navigate to different pages.

One difficult aspect of the project for me was the wrapping of the descriptions on the home page. I didn't want it to overflow but I also didn't want it to only display 1 line of the description. For this, I researched about line-clamp which separated the description into a certain amount of lines. At the last line, if it would overflow, then it would be clipped off and shown an ellipsis. 

I was also planning to implement the media links as an array so you can input more than 1 link. However, I am under time constraints so I could not complete that feature that I planned. 

## License

Copyright (c) 2024 Andy Li

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.