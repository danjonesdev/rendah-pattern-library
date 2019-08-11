import React from 'react'
import { Button } from "rendah-pattern-library";

import PreviewWrapper from '../../../components/preview-wrapper';

export default function ButtonPreview({ ...props }) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={'Button'}
        description={'These are the button variations'}
      />

      <div className="container  mla  mra">
        <div className={'flex  flex-wrap  justify-center'}>
          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"button"}
              text={"Primary"}
              icon={null}
              color={"black"}
              type={'primary'}

              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={false}
              disabled={false}

              href={null}
              target={null}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"button"}
              text={"Inverted"}
              icon={null}
              color={"black"}
              type={'primary'}

              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={true}
              loading={false}
              disabled={false}

              iconFloat={null}
              href={null}
              target={null}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"button"}
              text={"Loading"}
              icon={null}
              color={"black"}
              type={'primary'}

              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={true}
              disabled={false}

              iconFloat={null}
              href={null}
              target={null}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"button"}
              text={"Disabled"}
              icon={null}
              color={"black"}
              type={'primary'}

              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={true}
              loading={false}
              disabled={true}

              iconFloat={null}
              href={null}
              target={null}
              role={'button'}
            />
          </div>
        </div>

        <div className={'flex  flex-wrap  justify-center'}>
          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"button"}
              text={"Primary Small"}
              icon={null}
              color={"black"}
              type={'primary'}

              fluid={false}
              onClick={null}
              size={'small'}
              inverted={false}
              loading={false}
              disabled={false}

              iconFloat={null}
              href={null}
              target={null}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"button"}
              text={"Primary Medium"}
              icon={null}
              color={"black"}
              type={'primary'}

              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={false}
              disabled={false}

              iconFloat={null}
              href={null}
              target={null}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"button"}
              text={"Primary Large"}
              icon={null}
              color={"black"}
              type={'primary'}

              fluid={false}
              onClick={null}
              size={'large'}
              inverted={false}
              loading={false}
              disabled={false}

              iconFloat={null}
              href={null}
              target={null}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"button"}
              text={"Primary X-Large"}
              icon={null}
              color={"black"}
              type={'primary'}

              fluid={false}
              onClick={null}
              size={'x-large'}
              inverted={false}
              loading={false}
              disabled={false}

              iconFloat={null}
              href={null}
              target={null}
              role={'button'}
            />
          </div>
        </div>

        <div className={'flex  flex-wrap  justify-between'}>
          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"a"}
              text={"Secondary"}
              icon={"arrow-right"}
              color={"black"}
              type={'secondary'}

              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={false}
              disabled={false}

              iconFloat={null}
              href={'/'}
              target={'_blank'}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"a"}
              text={"Inverted"}
              icon={"arrow-right"}
              color={"black"}
              type={'secondary'}

              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={true}
              loading={false}
              disabled={false}

              iconFloat={null}
              href={'/'}
              target={'_blank'}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"a"}
              text={"Loading"}
              icon={"arrow-right"}
              color={"black"}
              type={'secondary'}

              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={true}
              disabled={false}

              iconFloat={null}
              href={'/'}
              target={'_blank'}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"a"}
              text={"Disabled"}
              icon={"arrow-right"}
              color={"black"}
              type={'secondary'}

              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={true}
              loading={false}
              disabled={true}

              iconFloat={null}
              href={'/'}
              target={'_blank'}
              role={'button'}
            />
          </div>
        </div>

        <div className={'flex  flex-wrap  justify-between'}>
          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"a"}
              text={"Secondary Small"}
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
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"a"}
              text={"Secondary Medium"}
              icon={"arrow-right"}
              color={"black"}
              type={'secondary'}

              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={false}
              disabled={false}

              iconFloat={'left'}
              href={'/'}
              target={'_blank'}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"a"}
              text={"Secondary Large"}
              icon={"arrow-right"}
              color={"black"}
              type={'secondary'}

              fluid={false}
              onClick={null}
              size={'large'}
              inverted={false}
              loading={false}
              disabled={false}

              iconFloat={'right'}
              href={'/'}
              target={'_blank'}
              role={'button'}
            />
          </div>

          <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
            <Button
              htmlEntity={"a"}
              text={"Secondary X-Large"}
              icon={"arrow-right"}
              color={"black"}
              type={'secondary'}

              fluid={false}
              onClick={null}
              size={'x-large'}
              inverted={false}
              loading={false}
              disabled={false}

              iconFloat={"left"}
              href={'/'}
              target={'_blank'}
              role={'button'}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
