import React from 'react'
import { Card, Button } from "rendah-pattern-library";

import PreviewWrapper from '../../../components/preview-wrapper';

export default function CardPreview({ ...props }) {
  const button = <Button
    htmlEntity={"a"}
    text={'Click here'}
    icon={"arrow-right"}
    color={"black"}
    type={'secondary'}
    fluid={false}
    onClick={null}
    size={'small'}
    inverted={false}
    loading={false}
    disabled={false}
    iconFloat={null}
    href={'/'}
    target={'_blank'}
    role={'button'}
  />;

  return (
    <React.Fragment>
      <PreviewWrapper
        title={'Card'}
        description={'These are the card variations'}
      />

      <div className="container  mla  mra">
        <div className={'flex  flex-wrap'}>
          <div className={'col-24  col-6-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={false}
              title={'title'}
              description={'description'}
              href={'/'}

              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={button}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={false}
              title={'title'}
              description={'description'}
              href={'/'}

              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={button}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={false}
              title={'title'}
              description={'description'}
              href={'/'}

              target={null}
              onClick={null}
              price={'£12.99'}
              discountPrice={null}
              button={button}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={false}
              title={'title'}
              description={'description'}
              href={'/'}

              target={null}
              onClick={null}
              price={'£12.99'}
              discountPrice={'£6.99'}
              button={button}
            />
          </div>
        </div>

        <div className={'flex  flex-wrap'}>
          <div className={'col-24  col-12-md  col-6-lg  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'title'}
              description={'description'}
              href={'/'}

              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={button}
            />
          </div>

          <div className={'col-24  col-12-md  col-6-lg  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'title'}
              description={'description'}
              href={'/'}

              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={button}
            />
          </div>

          <div className={'col-24  col-12-md  col-6-lg  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'title'}
              description={'description'}
              href={'/'}

              target={null}
              onClick={null}
              price={'£12.99'}
              discountPrice={null}
              button={button}
            />
          </div>

          <div className={'col-24  col-12-md  col-6-lg  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'title'}
              description={'description'}
              href={'/'}

              target={null}
              onClick={null}
              price={'£12.99'}
              discountPrice={'£6.99'}
              button={button}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
