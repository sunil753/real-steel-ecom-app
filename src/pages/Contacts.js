import {
  CardContent,
  Grid,
  TextField,
  Card,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

const Contacts = () => {
  return (
    <div className="container px-5 flex mx-auto my-10 flex-col gap-10 lg:flex-row">
      <div className="map flex-1 ">
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15081.633786747052!2d72.8959497345015!3d19.08972939327936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c62d5275e629%3A0x16b91bb144a76288!2sGhatkopar%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1671808437752!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" flex-1">
        <Card
          style={{ maxWidth: "768px", margin: "0 auto", padding: "20px 5px" }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    label="NAME"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your name"
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="EMAIL"
                    type="email"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter email "
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="PHONE"
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your phone Number"
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="MESSAGE"
                    fullWidth
                    variant="outlined"
                    placeholder="MESSAGE"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;
