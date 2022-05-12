import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { _getRests } from "../store/yelp";
import {
  TextField,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@material-ui/core";

const Questions = () => {
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const location = e.target.location.value;

    const limit = e.target.limit.value;
    const price = e.target.price.value;
    const cuisine = e.target.cuisine.value;

    console.log("questions.js", location, limit, price, cuisine);

    dispatch(_getRests({ location, limit, price, cuisine }));
  };

  return (
    <div id="questions">
      <form id="questionsForm" onSubmit={handleSubmit} name="questions">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <TextField
              name="location"
              label="What is your location?"
              type="text"
            />
          </Grid>

          <Grid item>
            <TextField name="cuisine" label="Cuisine Preference?" type="text" />
          </Grid>

          <Grid item>
            <TextField
              name="limit"
              label="# of restaurant selections?"
              type="text"
            />
          </Grid>

          <Grid>
            {/* <InputLabel id="price">Price</InputLabel> */}
            <Select
              // labelId="price"
              // id="demo-simple-select"
              name="price"
              value={price}
              label="Price"
              onChange={handleChange}
            >
              <MenuItem value={1}>$</MenuItem>
              <MenuItem value={2}>$$</MenuItem>
              <MenuItem value={3}>$$$</MenuItem>
              <MenuItem value={4}>$$$$</MenuItem>
            </Select>
          </Grid>
          <Grid />
          <Grid />

          <Button variant="contained" color="primary" type="submit">
            Next
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default Questions;
// import React, { useState } from "react";
// import {
//   Typography,
//   Select,
//   InputLabel,
//   TextField,
//   Button,
//   Stepper,
//   Step,
//   StepLabel,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   useForm,
//   Controller,
//   FormProvider,
//   useFormContext,
// } from "react-hook-form";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginRight: theme.spacing(1),
//   },
// }));

// function getSteps() {
//   return [
//     "Event Information",
//     "Invite Friends",
//     "Event Preferences",
//     // "Start Swiping",
//   ];
// }
// const EventInfoForm = () => {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Controller
//         control={control}
//         name="location"
//         render={({ field }) => (
//           <TextField
//             id="location"
//             label="What is your location?"
//             variant="outlined"
//             placeholder="Enter Your City"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />

//       <Controller
//         control={control}
//         name="limit"
//         render={({ field }) => (
//           <TextField
//             id="limit"
//             label="How many restaurant selections would you like?"
//             variant="outlined"
//             placeholder="Enter Number Between 2 and 50"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />

//       <Controller
//         control={control}
//         name="price"
//         render={({ field }) => (
//           <TextField
//             id="price-point"
//             label="Pricepoint"
//             variant="outlined"
//             // placeholder="Enter Your Nick Name"

//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//     </>
//   );
// };
// const InviteFriendsForm = () => {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Controller
//         control={control}
//         name="emailAddress"
//         render={({ field }) => (
//           <TextField
//             id="email"
//             label="E-mail"
//             variant="outlined"
//             placeholder="Enter Your E-mail Address"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />

//       <Controller
//         control={control}
//         name="phoneNumber"
//         render={({ field }) => (
//           <TextField
//             id="phone-number"
//             label="Phone Number"
//             variant="outlined"
//             placeholder="Enter Your Phone Number"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="alternatePhone"
//         render={({ field }) => (
//           <TextField
//             id="alternate-phone"
//             label="Alternate Phone"
//             variant="outlined"
//             placeholder="Enter Your Alternate Phone"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//     </>
//   );
// };
// const QuestionsForm = () => {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Controller
//         control={control}
//         name="address1"
//         render={({ field }) => (
//           <TextField
//             id="address1"
//             label="Address 1"
//             variant="outlined"
//             placeholder="Enter Your Address 1"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="address2"
//         render={({ field }) => (
//           <TextField
//             id="address2"
//             label="Address 2"
//             variant="outlined"
//             placeholder="Enter Your Address 2"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="country"
//         render={({ field }) => (
//           <TextField
//             id="country"
//             label="Country"
//             variant="outlined"
//             placeholder="Enter Your Country Name"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//     </>
//   );
// };

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <EventInfoForm />;

//     case 1:
//       return <InviteFriendsForm />;
//     case 2:
//       return <QuestionsForm />;

//     default:
//       return "unknown step";
//   }
// }

// const Questions = () => {
//   const classes = useStyles();
//   const methods = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       nickName: "",
//       emailAddress: "",
//       phoneNumber: "",
//       alternatePhone: "",
//       address1: "",
//       address2: "",
//       country: "",
//       cardNumber: "",
//       cardMonth: "",
//       cardYear: "",
//     },
//   });
//   const [activeStep, setActiveStep] = useState(0);
//   const [skippedSteps, setSkippedSteps] = useState([]);
//   const steps = getSteps();

//   const isStepOptional = (step) => {
//     return step === 1 || step === 2;
//   };

//   const isStepSkipped = (step) => {
//     return skippedSteps.includes(step);
//   };

//   const handleNext = (data) => {
//     console.log(data);
//     if (activeStep == steps.length - 1) {
//       fetch("https://jsonplaceholder.typicode.com/comments")
//         .then((data) => data.json())
//         .then((res) => {
//           console.log(res);
//           setActiveStep(activeStep + 1);
//         });
//     } else {
//       setActiveStep(activeStep + 1);
//       setSkippedSteps(
//         skippedSteps.filter((skipItem) => skipItem !== activeStep)
//       );
//     }
//   };

//   const handleBack = () => {
//     setActiveStep(activeStep - 1);
//   };

//   const handleSkip = () => {
//     if (!isStepSkipped(activeStep)) {
//       setSkippedSteps([...skippedSteps, activeStep]);
//     }
//     setActiveStep(activeStep + 1);
//   };

//   // const onSubmit = (data) => {
//   //   console.log(data);
//   // };
//   return (
//     <div>
//       <Stepper alternativeLabel activeStep={activeStep}>
//         {steps.map((step, index) => {
//           const labelProps = {};
//           const stepProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = (
//               <Typography
//                 variant="caption"
//                 align="center"
//                 style={{ display: "block" }}
//               >
//                 optional
//               </Typography>
//             );
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step {...stepProps} key={index}>
//               <StepLabel {...labelProps}>{step}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>

//       {activeStep === steps.length ? (
//         <Typography variant="h3" align="center">
//           Thank You
//         </Typography>
//       ) : (
//         <>
//           <FormProvider {...methods}>
//             <form onSubmit={methods.handleSubmit(handleNext)}>
//               {getStepContent(activeStep)}

//               <Button
//                 className={classes.button}
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//               >
//                 back
//               </Button>
//               {isStepOptional(activeStep) && (
//                 <Button
//                   className={classes.button}
//                   variant="contained"
//                   color="primary"
//                   onClick={handleSkip}
//                 >
//                   skip
//                 </Button>
//               )}
//               <Button
//                 className={classes.button}
//                 variant="contained"
//                 color="primary"
//                 // onClick={handleNext}
//                 type="submit"
//               >
//                 {activeStep === steps.length - 1 ? "Finish" : "Next"}
//               </Button>
//             </form>
//           </FormProvider>
//         </>
//       )}
//     </div>
//   );
// };

// export default LinaerStepper;

// return (
//   <div>
//     <h3>hello from questions page</h3>
//     <p>What's your location?</p>
//     <p>How Many Restaurants did you want to look at?</p>
//     <p></p>
//     <p>What is your price point?(dropdown)</p>
//   </div>
// );
