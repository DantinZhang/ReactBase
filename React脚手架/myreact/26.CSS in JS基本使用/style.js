import styled from 'styled-components';

const NiuBi = styled.div`
    .nav {
        color: red;
    }

    .box {
        border: 1px solid black;

        .title {
            font-size: 40px;
            &:hover {
                background-color: blue;
            }
        }

        .content {
            color: skyblue;
        }
    }
`

export default NiuBi;