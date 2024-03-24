const express =  require('express');
const app = express();
const port = 8080;
const path =  require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(  __dirname, "views"));
app.use(express.static(path.join(  __dirname, 'public')));

let posts = [
    {
        username:"Shivam Gupta",
        content:"I am free!"
    },
    {
        username:"Ashutosh Tiwari",
        content:"Hello Hindustan!"
    },
    {
        username:"Mukesh Ambani",
        content:"I am rich!"
    },
]

app.get("https://backened-2.vercel.app/posts/new",(req,res)=>{
    res.render(`form.ejs`,{posts});
})

app.get("https://backened-2.vercel.app/posts",(req,res)=>{
    res.render(`index.ejs`,{posts});
})

app.post("https://backened-2.vercel.app/posts",(req,res)=>{
    let {username,content} = req.body;
    if(!username || !content){
        return res.send("Please fill out the form")
    }
    else{
        posts.push({username,content}); 
        // console.log(posts)
        res.redirect('https://backened-2.vercel.app/posts');
    }
})

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`)
// });
