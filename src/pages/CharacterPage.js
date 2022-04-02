import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 400,
  width: 400,
  justifyContent: 'center',
  paddingBottom: 25,
  alignItems: 'flex-end',
  [theme.breakpoints.down('large')]: {
    width: '100% !important', // Overrides inline-style
    height: 500,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.3,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const CharacterPage = () => {
  const [character, setCharacter] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((response) => response.json())
      .then((response) => {
        const data = response;
        setCharacter(data);
      });
  }, [params.id]);
  return (
    <div>
      {character && (
        <Box
          sx={{
            paddingLeft: 5,
            paddingTop: 5,
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 300,
            width: '100%',
          }}
        >
          <div>
            <ImageButton focusRipple key={character.name}>
              <ImageSrc
                style={{ backgroundImage: `url(${character.image})` }}
              />
              <ImageBackdrop className='MuiImageBackdrop-root' />
              <Image>
                <Typography
                  component='span'
                  variant='subtitle1'
                  color='inherit'
                  sx={{
                    position: 'relative',
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    fontSize: 20,
                  }}
                >
                  {character.name}
                  <ImageMarked className='MuiImageMarked-root' />
                </Typography>
              </Image>
            </ImageButton>
          </div>
        </Box>
      )}
    </div>
  );
};

export default CharacterPage;
