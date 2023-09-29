import Image from 'next/image';
import styled from 'styled-components';
import backward from '../../public/Backward.png';

const StyledBackButton = styled.a`
    display: flex;
    gap: 5px;
    margin: 1.5em 0;
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 500;
`

export default function BackButton() {
    return(
        <StyledBackButton href='/'>
            <Image src={backward} alt='Back to catalogue' width={24} />
            <p>Voltar</p>
        </StyledBackButton>
    )
}