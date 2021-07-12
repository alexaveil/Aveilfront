/* import external modules */
import {
  Card,
  Grid,
  Zoom,
  Paper,
  Container,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Autocomplete } from '@material-ui/lab'

/* import internal modules */
import { useStyles, CssTextField } from './styles'
import Loading from '../../common/Loading'
import RobotImage from '../../../assets/robot.png'

const Section1 = () => {
  const classes = useStyles()
  const [motion, setMotion] = useState(false)
  const [loadingImage, setLoadingImage] = useState(true)
  const [loadingTextfield, setLoadingTextfield] = useState(true)

  useEffect(() => {
    handleChange()
    setTimeout(() => {
      setLoadingImage(false)
    }, 500)

    setTimeout(() => {
      setLoadingTextfield(false)
    }, 700)
  }, [])

  const handleChange = () => {
    setMotion((prev) => !prev)
  }

  const CustomPaper = (props) => {
    return <Paper elevation={8} {...props} />
  }

  return (
    <Container maxWidth="lg" component="section" className={classes.section}>
      <Grid container spacing={0} justify="flex-end">
        <Grid item xs={6}>
          <Zoom
            in={motion}
            style={{ transitionDelay: motion ? '1300ms' : '0ms' }}
          >
            <Paper elevation={0} className={classes.paper}>
              <Typography className={classes.title} align="left">
                Avi
              </Typography>
              <Typography className={classes.subtitle} align="left">
                Ask me anything, I'II do my best to help you.
              </Typography>
            </Paper>
          </Zoom>
        </Grid>
      </Grid>
      {!loadingImage ? (
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <center>
              <Card elevation={0} className={classes.image}>
                <CardMedia
                  component="img"
                  alt="Aveil"
                  image={RobotImage}
                  title="Aveil"
                />
              </Card>
            </center>
          </Grid>
        </Grid>
      ) : (
        <Loading />
      )}
      {!loadingTextfield ? (
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <center>
              <Autocomplete
                options={top100Films}
                id="combo-box-autocomplete"
                PaperComponent={CustomPaper}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    color="primary"
                    variant="filled"
                    label={
                      <span className={classes.textLabel}>
                        Ask Avi a Question...
                      </span>
                    }
                    className={classes.texfield}
                  />
                )}
              />
            </center>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Container>
  )
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
]

export default Section1

// import React from 'react'
// import Switch from '@material-ui/core/Switch'
// import Paper from '@material-ui/core/Paper'
// import Zoom from '@material-ui/core/Zoom'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: 180,
//   },
//   container: {
//     display: 'flex',
//   },
//   paper: {
//     margin: theme.spacing(1),
//   },
//   svg: {
//     width: 100,
//     height: 100,
//   },
//   polygon: {
//     fill: theme.palette.common.white,
//     stroke: theme.palette.divider,
//     strokeWidth: 1,
//   },
// }))

// export default function SimpleZoom() {
//   const classes = useStyles()
//   const [checked, setChecked] = React.useState(false)

//   const handleChange = () => {
//     setChecked((prev) => !prev)
//   }

//   return (
//     <div className={classes.root}>
//       <FormControlLabel
//         control={<Switch checked={checked} onChange={handleChange} />}
//         label="Show"
//       />
//       <div className={classes.container}>
//         <Zoom in={checked}>
//           <Paper elevation={4} className={classes.paper}>
//             <svg className={classes.svg}>
//               <polygon
//                 points="0,100 50,00, 100,100"
//                 className={classes.polygon}
//               />
//             </svg>
//           </Paper>
//         </Zoom>
//         <Zoom
//           in={checked}
//           style={{ transitionDelay: checked ? '500ms' : '0ms' }}
//         >
//           <Paper elevation={4} className={classes.paper}>
//             <svg className={classes.svg}>
//               <polygon
//                 points="0,100 50,00, 100,100"
//                 className={classes.polygon}
//               />
//             </svg>
//           </Paper>
//         </Zoom>
//       </div>
//     </div>
//   )
// }
