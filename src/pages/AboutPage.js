import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
	return (
		<main>
			<PageHero title="about" />
			<Wrapper className="page section section-center">
				<img src={aboutImg} alt="slik relaxer" />
				<article>
					<div className="title">
						<h2>Our Growth</h2>
						<div className="underline"></div>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perferendis voluptates provident expedita natus aliquid
						ducimus! Deserunt nam dolores quaerat, labore quas in. Animi
						exercitationem blanditiis non iusto vitae quia ad aspernatur
						sed. Repellendus, sunt quam?
					</p>
				</article>
			</Wrapper>
			;
		</main>
	);
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 300px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    img {
      height: 370px;
    }
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
