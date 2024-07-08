import React from 'react';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

// تعريف ستايل للروابط
const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    padding: '8px 10px',
    '&:hover': {
        backgroundColor: theme.palette.action.hover, // لون الخلفية عند التحويل بالماوس
    },
}));

export default function MenuComp({ handleClose, anchorEl, menuItems }) {
    const open = Boolean(anchorEl);

    return (
        <div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {menuItems.map((item, index) => (
                    <li key={index} onClick={handleClose} style={{ listStyleType: 'none' }}>
                        <StyledLink to={`/geotop/${item.replace(/ /g, "").toLowerCase()}page`}>
                            {item}
                        </StyledLink>
                    </li>
                ))}
            </Menu>
        </div>
    );
}
