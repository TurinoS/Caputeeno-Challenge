'use client'

import styled from 'styled-components';
import arrowDown from '../../public/Arrow.png';
import Image from 'next/image';

const StyledFilter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2em 0;

    & ul {
        list-style: none;
        display: flex;
        gap: 2.5em;

        & li {
            cursor: pointer;

            &.selected {
                color: var(--dark-gray);
                font-weight: 600;
                border-bottom: 4px solid var(--orange);
            }
        }
    }

    & button {
        display: flex;
        align-items: center;
        gap: .5em;
        border: none;
        color: var(--text-dark);
        font-family: inherit;
        cursor: pointer;
        background-color: var(--gray)
    }
`

export default function Filter() {
    return(
        <StyledFilter>
            <ul>
                <li className='selected'>TODOS OS PRODUTOS</li>
                <li>CAMISETAS</li>
                <li>CANECAS</li>
            </ul>
            <div>
                <button>Organizar por <Image src={arrowDown} alt='Open list' width={30} /></button>
            </div>
        </StyledFilter>
    )
}