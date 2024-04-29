const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.S3_BUCKET}:${process.env.SECRET_KEY}@cluster0.5cua0xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const ObjectId = require('mongodb').ObjectId;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


//form things- 
async function run() {

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const touristSpotsCollection = client.db('test').collection('spots');

        app.get('/touristspots', async (req, res) => {
            const cursor = touristSpotsCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // app.get('/touristspots/:id', async (req, res) => {
        //     const id = req.params.id;
        //     console.log(id);
        //     const query = { _id: new ObjectId(id)  }
        //     const result = await touristSpotsCollection.findOne(query);
        //     res.send(result);
        //     console.log(result);
        // })

        //add list
        app.post('/touristspots', async (req, res) => {
            const formData= req.body;
            console.log(formData);
            const result = await touristSpotsCollection.insertOne(formData);
            res.send(result);
        })

        // delete
           app.delete('/touristspots/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id)}
            const result = await touristSpotsCollection.deleteOne(query);
            res.send(result);
        })


        // update
        app.get('/touristspots/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id)  }
            const result = await touristSpotsCollection.findOne(query);
            res.send(result);
        })

        app.put('/touristspots/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const spots = req.body;

            const data = {
                $set: {
                    image_url: spots.image_url,
                    tourists_spot_name: spots.tourists_spot_name,
                    country_name: spots.country_name,
                    location: spots.location,
                    short_description: spots.short_description,
                    average_cost: spots.average_cost,
                    seasonality: spots.seasonality,
                    travel_time: spots.travel_time,
                    total_visitors_per_year: spots.total_visitors_per_year,
                    user_name: spots.displayName, 
                    user_email: spots.email,
                }
            }

            const result = await touristSpotsCollection.updateOne(filter, data, options);
            res.send(result);
        })





        //show countries
        const countryCollection = client.db('test').collection('countries');

        app.get('/countries', async (req, res) => {
            const cursor = countryCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.post('/countries', async (req, res) => {
          const formData= req.body;
          console.log(formData);
          const result = await countryCollection.insertOne(formData);
          res.send(result);
      })
    


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }

}

run().catch(console.dir);

app.get('/', (req, res) =>{
    res.send('server running')
})

app.listen(port, ()=>{
    console.log(`Port:${port}`)
})


       //mylist
//         app.get("/touristspots/:email", async (req, res) => {
//           const email = req.params.email;
//            const query = { user_email: email };
//   const result = await touristSpotsCollection.find(query)
//   res.send(result);
//       });
      
        // mongoimport --uri "mongodb+srv://Admin:Admin0202@cluster0.5cua0xk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" --collection countries --file "C:/Users/NISHA/Downloads/countries.json" --jsonArray
        // C:/Users/NISHA/Downloads/countries.json