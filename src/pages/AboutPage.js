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
						<h2>History</h2>
						<div className="underline"></div>
					</div>
					<p>
						With a passion for transforming living spaces into exquisite
						sanctuaries, eDEN Interiors has been dedicated to providing
						unrivaled design solutions for homeowners worldwide. From
						humble beginnings as a small local business, eDEN Interiors
						rapidly expanded its reach, captivating clients with its
						innovative and sophisticated approach.{' '}
						<p>
							Throughout the years, eDEN Interiors has remained at the
							forefront of interior design trends, embracing timeless
							elegance and contemporary flair. The company's team of
							talented designers and skilled craftsmen has consistently
							delivered exceptional results, elevating residences into
							personalized works of art. eDEN Interiors' commitment to
							excellence has earned it numerous accolades, solidifying
							its reputation as a trusted industry leader.{' '}
						</p>
						<p>
							{' '}
							Today, eDEN Interiors continues to create breathtaking
							environments that inspire and enrich lives. From concept to
							execution, their holistic approach ensures every detail is
							meticulously crafted, resulting in extraordinary spaces
							that reflect the unique vision and style of each client.
							With an unwavering commitment to unparalleled quality and
							client satisfaction, eDEN Interiors continues to redefine
							the art of home interiors.
						</p>
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
