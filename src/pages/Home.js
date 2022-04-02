import React, { useEffect, useState } from 'react';
import {
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    pages: 42,
  });
  const [sortByGender, setSortByGender] = useState('');
  const [sortByAlive, setSortByAlive] = useState('');

  const handleChange = (event) => {
    if (event.target.value === 'male') {
      setSortByGender(event.target.value);
      searchMovies({ gender: event.target.value });
    } else if (event.target.value === 'female') {
      setSortByGender(event.target.value);
      searchMovies({ gender: event.target.value });
    } else if (event.target.value === 'genderless') {
      setSortByGender(event.target.value);
      searchMovies({ gender: event.target.value });
    } else if (event.target.value === 'unknown') {
      setSortByGender(event.target.value);
      searchMovies({ gender: event.target.value });
    } else if (event.target.value === 'alive') {
      setSortByAlive(event.target.value);
      searchMovies({ status: event.target.value });
    } else if (event.target.value === 'dead') {
      setSortByAlive(event.target.value);
      searchMovies({ status: event.target.value });
    }

    // searchMovies({ status: event.target.value });
  };

  useEffect(() => {
    searchMovies();
  }, [sortByGender, sortByAlive]);

  function searchMovies({
    page = 1,
    status = sortByAlive,
    gender = sortByGender,
  } = {}) {
    fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&status=${status}&gender=${gender}`
    )
      .then((response) => response.json())
      .then((response) => {
        const data = response.results;
        const pageData = response.info;
        setValue(data);
        setPageInfo({
          pages: pageData.pages,
        });
      });
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Pagination
          count={pageInfo.pages}
          onChange={(e, value) => searchMovies({ page: value })}
          color='secondary'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 3,
            mb: 3,
          }}
        />

        <FormControl sx={{ width: '25%', color: 'primary' }}>
          <InputLabel id='demo-simple-select-label' sx={{ color: 'primary' }}>
            Sort By
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={
              (value === 'male') |
              (value === 'female') |
              (value === 'genderless') |
              (value === 'unknown')
                ? sortByGender
                : sortByAlive
            }
            label='Sort By'
            onChange={handleChange}
          >
            <MenuItem disabled value=''>
              Gender
            </MenuItem>
            <MenuItem value='male' sx={{ pl: 5 }}>
              Male
            </MenuItem>
            <MenuItem value='female' sx={{ pl: 5 }}>
              Female
            </MenuItem>
            <MenuItem value='genderless' sx={{ pl: 5 }}>
              Genderless
            </MenuItem>
            <MenuItem value='unknown' sx={{ pl: 5 }}>
              Unknown
            </MenuItem>
            <MenuItem disabled value=''>
              Status
            </MenuItem>
            <MenuItem value='alive' sx={{ pl: 5 }}>
              Alive
            </MenuItem>
            <MenuItem value='dead' sx={{ pl: 5 }}>
              Dead
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <section className='showcase__Wrapper-sc-1x4wk68-0 kZQvlq'>
        <div className='showcase__Inner-sc-1x4wk68-1 iUltZj'>
          {value.map((item) => (
            <article className='characterCard__Wrapper-sc-1ejywvi-0 jHMBqe'>
              <div className='characterCard__ImgWrapper-sc-1ejywvi-1 gzCUdp'>
                <img
                  src={item.image}
                  onClick={() => navigate('/character/' + item.id)}
                  alt='Armothy'
                />
              </div>
              <div className='characterCard__ContentWrapper-sc-1ejywvi-2 hNRKYn'>
                <div className='section'>
                  <a
                    onClick={() => navigate('/character/' + item.id)}
                    rel='nofollow noopener noreferrer'
                    target='_blank'
                    className='externalLink__ExternalLink-sc-1lixk38-0 bQJGkk'
                  >
                    <h2>{item.name}</h2>
                  </a>
                  <span className='status'>
                    <span className='status__icon'></span>
                    {item.status}
                  </span>
                </div>
                <div className='section'>
                  <span className='text-gray'>Last known location:</span>
                  <a
                    href={'https://rickandmortyapi.com/api/location/' + item.id}
                    rel='nofollow noopener noreferrer'
                    target='_blank'
                    className='externalLink__ExternalLink-sc-1lixk38-0 bQJGkk'
                  >
                    {item.location.name}
                  </a>
                </div>
                <div className='section'>
                  <span className='text-gray'>Species:</span>
                  <a
                    href='https://rickandmortyapi.com/api/episode/23'
                    rel='nofollow noopener noreferrer'
                    target='_blank'
                    className='externalLink__ExternalLink-sc-1lixk38-0 bQJGkk'
                  >
                    {item.species}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
