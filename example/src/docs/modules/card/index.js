import React from 'react'
import { Card, Button } from "rendah-pattern-library";

import PreviewWrapper from '../../../components/preview-wrapper';
import propDocs from './propDocs'

export default function CardPreview({ ...props }) {
  const exampleButtonA = <Button
    htmlEntity={"a"}
    text={'Click here'}
    icon={"arrow-right"}
    color={"black"}
    type={'primary'}
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

const exampleButtonB = <Button
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
        propDocs={propDocs}
      />

      <div className="container  mla  mra">
        <div className={'flex  flex-wrap'}>
          <div className={'col-24  col-6-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={false}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={exampleButtonA}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={false}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={exampleButtonB}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={false}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={'£12.99'}
              discountPrice={null}
              button={exampleButtonA}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={false}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={'£12.99'}
              discountPrice={'£6.99'}
              button={exampleButtonB}
            />
          </div>
        </div>

        <div className={'flex  flex-wrap'}>
          <div className={'col-24  col-12-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={exampleButtonA}
            />
          </div>

          <div className={'col-24  col-12-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={exampleButtonB}
            />
          </div>

          <div className={'col-24  col-12-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={'£12.99'}
              discountPrice={null}
              button={exampleButtonA}
            />
          </div>

          <div className={'col-24  col-12-md  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={'£12.99'}
              discountPrice={'£6.99'}
              button={exampleButtonB}
            />
          </div>
        </div>

        <div className={'flex  flex-wrap'}>
          <div className={'col-24  col-12-md  col-8-lg  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={exampleButtonA}
            />
          </div>

          <div className={'col-24  col-12-md  col-8-lg  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={null}
              discountPrice={null}
              button={exampleButtonB}
            />
          </div>

          <div className={'col-24  col-12-md  col-8-lg  flex  justify-start  align-end  pa3  mb4'}>
            <Card
              type={'article'}
              image={'https://via.placeholder.com/1000'}
              imagePlaceholder={'https://via.placeholder.com/100'}
              imageInline={true}
              title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta.'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat diam vel tellus porta, quis facilisis odio laoreet. Sed accumsan aliquam odio.'}
              href={'/'}

              target={null}
              onClick={null}
              price={'£12.99'}
              discountPrice={'£6.99'}
              button={exampleButtonB}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
