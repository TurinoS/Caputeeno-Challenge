'use client'

import styled from 'styled-components';
import Link from 'next/link';
import { Saira_Stencil_One } from 'next/font/google';
import shoppingBag from '../../public/Cart.png';
import serchLoupe from '../../public/Loupe.png';
import Image from 'next/image';

const sairaStencil = Saira_Stencil_One({ 
    weight: '400', 
    subsets: ["latin"],
})

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2em 10em;
    background-color: var(--white);

    & a {
        text-decoration: none;
        color: var(--dark-gray);
        font-size: 40px;
        line-height: 40px;
    }

    & div {
        display: flex;
        align-items: center;
        gap: 1.5em;

        & a {
            height: 40px;
        }

        & span {
            font-size: 10px;
            color: var(--white);
            font-weight: 500;
            background-color: var(--red);
            border-radius: 50%;
            padding: .1em .5em;
            position: relative;
            right: 8px;
        }
    }
`

const StyledInput = styled.div`

    & input {
        border: none;
        background-color: var(--gray);
        border-radius: 8px;
        width: 350px;
        padding: .8em 1em;
        font-size: .8em;
        font-family: inherit;
        color: var(--text-dark)
    }

    & img {
        position: relative;
        right: 68px;
        cursor: pointer;
    }
`

export default function Header() {
    return(
        <StyledHeader>
            <Link className={sairaStencil.className} href="/">caputeeno</Link>
            <div>
                <StyledInput>
                    <input type='text' placeholder='Procurando por algo específico?' />
                    <Image src={serchLoupe} alt='search' width={30} />
                </StyledInput>
                <Link href="/cart">
                    <Image src={shoppingBag} alt='Shopping bag' width={30} />
                    <span>2</span>
                </Link>
            </div>
        </StyledHeader>
    )
}