import React from 'react';
import styled from 'styled-components';
import { services } from '../utils/constants';

const Services = () => {
	return (
		<Wrapper>
			<div className="section-center">
				<article className="header">
					<h3>
						Creating homes that delight, <br />
						with customers at heart.
					</h3>
					<p>
						<span className="eden">eDEN</span> meticulously crafts each
						product with passion, ensuring that every detail exudes
						elegance and quality, captivating customers with an undeniable
						love for our creations.
					</p>
				</article>
				<div className="services-center">
					{services.map((service) => {
						const { id, text, icon, title } = service;
						return (
							<article key={id} className="service">
								<span className="icon">{icon}</span>
								<h4>{title}</h4>
								<p>{text}</p>
							</article>
						);
					})}
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  p .eden{
    color: var(--clr-primary-3);
    display: inline;
    font-size: 1rem;
    font-weight: 500;

  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
