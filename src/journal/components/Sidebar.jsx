import { TurnedInNot } from "@mui/icons-material"
import { Drawer, Box, Divider, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material"

export const Sidebar = ({ drawerWidth }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">Martin Aguilar</Typography>
        </Toolbar>

        <Divider />
        <List>
          {
            ['enero', 'febrero', 'marzo', 'abril'].map(text => (
              <ListItem key={text} disablePadding>

                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={'Lorem impus kjasjsk'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
            )
          }
        </List>



      </Drawer>

    </Box>
  )
}
