import { Card, CardContent, Box, Typography } from "@mui/material";

export default () => (
  <Box
    sx={{
      my: 2,
    }}
  >
    <Card>
      <CardContent>
        <div>
          <Typography variant="h3" color="primary" gutterBottom>
            NAAC Data of SAS!
          </Typography>
          <Typography variant="p">
            In this portal, you can check the details that we have collected for
            all the divisions of School of Advanced Sciences.
          </Typography>
        </div>
      </CardContent>
    </Card>
  </Box>
);
