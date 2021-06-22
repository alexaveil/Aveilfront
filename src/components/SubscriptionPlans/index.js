/* import external modules */
import { Fragment } from 'react'
import {
  Card,
  Grid,
  Button,
  Container,
  Typography,
  CardHeader,
  CardActions,
  CardContent,
} from '@material-ui/core'
import { Star } from '@material-ui/icons'

/* import internal modules */
import useStyles from './styles'
import SubscriptionImage from '../../assets/subscription-desktop.png'

const tiers = [
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '10',
    description: [
      'Get unlimited answers and as much time as you want ',
      'Unlock deeper and longer',
      'Unlock all avatars',
      'More optimized, personalized answers and conversations',
      'Level up faster, no daily level up limit',
      'Unlock all characters',
      'Early access to new features',
      'No ads',
    ],
    buttonText: 'Subscribe',
    buttonVariant: 'contained',
  },
  {
    title: 'Pro Plus',
    price: '72',
    description: [
      'Get unlimited answers and as much time as you want ',
      'Unlock deeper and longer',
      'Unlock all avatars',
      'More optimized, personalized answers and conversations',
      'Level up faster, no daily level up limit',
      'Unlock all characters',
      'Early access to new features',
      'No ads',
    ],
    buttonText: 'Subscribe',
    buttonVariant: 'outlined',
  },
]

const SubscriptionsPlans = () => {
  const classes = useStyles()
  return (
    <Fragment>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Subscribe to Aveil Pro
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12} sm={6} md={4}>            
            <img src={SubscriptionImage} alt="Aveil" className={classes.image}/>
          </Grid>
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                    color: 'initial',
                  }}
                  action={tier.title === 'Pro' ? <Star /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h3" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      {tier.title !== 'Pro Plus' ? '/mo' : '/year'}
                    </Typography>
                  </div>
                  <ul className={classes.listItems}>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle2"
                        align="left"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  )
}

export default SubscriptionsPlans
