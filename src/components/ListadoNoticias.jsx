import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
import Noticia from '../components/Noticia'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const ListadoNoticias = () => {
    const { noticias } = useNoticias()

    console.log(noticias)
  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant={'h3'}
        >
            Últimas Noticias
        </Typography>

        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia key={noticia.url} noticia={noticia} />
            ), [])}
        </Grid>

        <Stack 
            sx={{
                marginY: 5
            }}
            spacing={2}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
        >
                <Pagination 
                    count={10} 
                    color="primary" 
                />
        </Stack>
    </>
  )
}

export default ListadoNoticias