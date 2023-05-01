<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="<%= csrfToken %>" />
    <link rel="stylesheet" href="./css/style.css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title><%= title %></title>
  </head>

  <body class="bg-gray-800 text-gray-100">
    <div class="grid grid-cols-6 p-3 gap-2">
      <div class="col-start-3 col-span-2">
        <%- include('header.ejs') %>
        <p>New here? <a href="/signup">Sign-up</a></p>
        <p>Already a member? <a href="/login">Sign-in</a></p>
        
      </div>
    </div>
  </body>
</html>
