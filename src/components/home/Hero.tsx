import { Box, Link, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

import { wfRepo } from '@/envDefault'

const SecondaryLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 'bold',
}))

interface Props {
  sx?: object
}

const Hero: React.VFC<Props> = (props: Props) => {
  return (
    <Box
      sx={{
        maxWidth: '100vw',
        bgcolor: 'primary.main',
        ...props.sx,
      }}>
      <Box
        sx={{
          maxWidth: 'lg',
          minWidth: 'lg',
          mx: 'auto',
          py: 6,
          px: 8,
        }}>
        <Stack spacing={4}>
          <Typography
            component='h1'
            sx={{
              color: 'white',
              fontSize: '3.6rem',
              fontWeight: 'bold',
              fontFamily: 'Quicksand',
              my: 0,
            }}>
            {wfRepo()}
          </Typography>
          <Typography
            component='p'
            sx={{
              bgcolor: 'transparent',
              typography: 'subtitle1',
              fontFamily: 'Quicksand',
              fontSize: '1.2rem',
            }}>
            This app is generated by{' '}
            <SecondaryLink href='https://github.com/ddbj/yevis-web'>
              ddbj/yevis-web
            </SecondaryLink>
            .
            <br />
            Browse workflows delivered by the{' '}
            <SecondaryLink href='https://www.ga4gh.org/news/tool-registry-service-api-enabling-an-interoperable-library-of-genomics-analysis-tools/'>
              GA4GH Tool Registry Service API
            </SecondaryLink>
            ,
            <br />
            which is generated by{' '}
            <SecondaryLink href='https://github.com/ddbj/yevis-cli'>
              ddbj/yevis-cli
            </SecondaryLink>{' '}
            and hosted on{' '}
            <SecondaryLink href={`https://github.com/${wfRepo()}`}>
              {wfRepo()}
            </SecondaryLink>
            .
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero
