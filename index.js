const express = require("express");
const app = express();
const port = 3000;

// Array of items
// const items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//     { id: 3, name: 'Item 3' }
// ];

const items = {
  data: [
    {
      title: "Serene Mountain View",
      imageUrl:
        "https://images.unsplash.com/photo-1701455516458-ae6e8999a0a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D",
      isChristmas: true,
    },
    {
      title: "Sunset Over the Ocean",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1700801936521-348308ae2db3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
      isChristmas: false,
    },
    {
      title: "Lush Green Forest",
      imageUrl:
        "https://images.unsplash.com/photo-1700573941868-5547f43dcbed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D",
      isChristmas: false,
    },
    {
      title: "Misty Mountains",
      imageUrl:
        "https://images.unsplash.com/photo-1700451761287-b8b21c406208?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHx8fA%3D%3D",
      isChristmas: false,
    },
    {
      title: "Christmas decorations",
      imageUrl:
        "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isChristmas: true,
    },
    {
      title: "Autumn Leaves in the Park",
      imageUrl:
        "https://images.unsplash.com/photo-1701373058228-2a78e2dfb491?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
      isChristmas: false,
    },
    {
      title: "Christmas kids",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661759243707-57788530c00d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hyaXN0bWFzfGVufDB8fDB8fHww",
      isChristmas: true,
    },
    {
      title: "Cityscape at Night",
      imageUrl:
        "https://images.unsplash.com/photo-1699614614426-686fa0e1cd75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDh8fHxlbnwwfHx8fHw%3D",
      isChristmas: false,
    },
    {
      title: "Peachy Dawn",
      imageUrl:
        "https://images.unsplash2.com/photo-1701352280298-c7b6ac65e3d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D",
      isChristmas: false,
    },
    {
      title: "Peaceful Beach at Dawn",
      imageUrl:
        "https://images.unsplash.com/photo-1701352280298-c7b6ac65e3d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D",
      isChristmas: false,
    },
    {
      title: "Cityscape at Night",
      imageUrl:
        "https://images.unsplash.com/photo-1699614614426-686fa0e1cd75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDh8fHxlbnwwfHx8fHw%3D",
      isChristmas: false,
    },
    {
      title: "Peachy Dawn",
      imageUrl:
        "https://images.unsplash2.com/photo-1701352280298-c7b6ac65e3d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D",
      isChristmas: false,
    },
    {
      title: "Peaceful Beach at Dawn",
      imageUrl:
        "https://images.unsplash.com/photo-1701352280298-c7b6ac65e3d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fHw%3D",
      isChristmas: false,
    },
  ],
};
// GET endpoint
app.get("/items", (req, res) => {
  setTimeout(() => {
    res.json(items);
  }, 1500);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
