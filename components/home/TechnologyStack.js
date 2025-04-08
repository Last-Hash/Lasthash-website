import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import SectionTitle from '../common/SectionTitle';
import Image from 'next/image';

const technologies = {
  frontend: {
    title: 'Frontend',
    items: [
      { name: 'React.js', icon: '/tech/react.svg' },
      { name: 'Next.js', icon: '/tech/nextjs.svg' },
      { name: 'TypeScript', icon: '/tech/typescript.svg' },
      { name: 'Material-UI', icon: '/tech/mui.svg' }
    ]
  },
  backend: {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: '/tech/nodejs.svg' },
      { name: 'Python', icon: '/tech/python.svg' },
      { name: 'Java', icon: '/tech/java.svg' },
      { name: 'PHP', icon: '/tech/php.svg' }
    ]
  },
  database: {
    title: 'Database',
    items: [
      { name: 'MongoDB', icon: '/tech/mongodb.svg' },
      { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
      { name: 'MySQL', icon: '/tech/mysql.svg' },
      { name: 'Redis', icon: '/tech/redis.svg' }
    ]
  },
  cloud: {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: '/tech/aws.svg' },
      { name: 'Docker', icon: '/tech/docker.svg' },
      { name: 'Kubernetes', icon: '/tech/kubernetes.svg' },
      { name: 'Jenkins', icon: '/tech/jenkins.svg' }
    ]
  }
};

const TechnologyStack = ({ isDark }) => {
  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      bgcolor: 'background.paper'
    }}>
      <Container>
        <SectionTitle 
          title="Technology Stack" 
          subtitle="We use cutting-edge technologies to build modern solutions"
        />
        <Grid container spacing={4}>
          {Object.entries(technologies).map(([key, category]) => (
            <Grid item xs={12} md={6} key={key}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 3,
                  height: '100%',
                  border: 1,
                  borderColor: theme => isDark ? 'rgba(255,255,255,0.1)' : 'divider',
                  bgcolor: theme => isDark ? 'background.paper' : 'background.default',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transition: 'all 0.3s ease',
                    boxShadow: theme => isDark 
                      ? '0 8px 24px rgba(0,0,0,0.4)'
                      : '0 8px 24px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    mb: 3,
                    fontWeight: 'bold',
                    color: 'primary.main'
                  }}
                >
                  {category.title}
                </Typography>
                <Grid container spacing={2}>
                  {category.items.map((tech, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 1,
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            transition: 'transform 0.3s ease'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            position: 'relative',
                            width: 48,
                            height: 48,
                          }}
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                        <Typography 
                          variant="caption" 
                          align="center"
                          sx={{ fontWeight: 500 }}
                        >
                          {tech.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnologyStack;