import styled from 'styled-components';

const NiuBi = styled.div.attrs((props) => {
    return {
        //color如果传了就用传的值，没传就用默认值
        myColor: props.color || 'orange'
    }
})`
    .nav {
        color: ${props => props.myColor};
        font-size: ${props => props.size};
    }

    .box {
        border: 1px solid black;

        .title {
            font-size: 40px;
            &:hover {
                background-color: blue;
            }
            &.active {
                color:red;
            }
        }

        .content {
            color: skyblue;
        }
    }
`

export default NiuBi;