import React from 'react'
import { Button } from 'rendah-pattern-library'

import PreviewWrapper from '../../../components/preview-wrapper'
import propDocs from './propDocs'

export default function ButtonPreview({ ...props }) {
  return (
    <React.Fragment>
      <PreviewWrapper
        title={'Button'}
        description={'These are the button variations'}
        propDocs={propDocs}
      />

      <div className='container  mla  mra'>
        <div className={'flex  flex-wrap  justify-center'}>
          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Primary'}
              icon={null}
              color={'black'}
              type={'primary'}
              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={false}
              disabled={false}
              withLinkProps={{
                type: 'internal',
                url: '/hello',
                target: '_blank'
              }}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Inverted'}
              icon={null}
              color={'black'}
              type={'primary'}
              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={true}
              loading={false}
              disabled={false}
              iconFloat={null}
              withLinkProps={null}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Loading'}
              icon={null}
              color={'black'}
              type={'primary'}
              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={true}
              disabled={false}
              iconFloat={null}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Disabled'}
              icon={null}
              color={'black'}
              type={'primary'}
              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={true}
              loading={false}
              disabled={true}
              iconFloat={null}
            />
          </div>
        </div>

        <div className={'flex  flex-wrap  justify-center'}>
          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Primary Small'}
              icon={null}
              color={'black'}
              type={'primary'}
              fluid={false}
              onClick={null}
              size={'small'}
              inverted={false}
              loading={false}
              disabled={false}
              iconFloat={null}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Primary Medium'}
              icon={null}
              color={'black'}
              type={'primary'}
              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={false}
              disabled={false}
              iconFloat={null}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Primary Large'}
              icon={null}
              color={'black'}
              type={'primary'}
              fluid={false}
              onClick={null}
              size={'large'}
              inverted={false}
              loading={false}
              disabled={false}
              iconFloat={null}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Primary X-Large'}
              icon={null}
              color={'black'}
              type={'primary'}
              fluid={false}
              onClick={null}
              size={'x-large'}
              inverted={false}
              loading={false}
              disabled={false}
              iconFloat={null}
            />
          </div>
        </div>

        <div className={'flex  flex-wrap  justify-between'}>
          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Secondary'}
              icon={'arrow-right'}
              color={'black'}
              type={'secondary'}
              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={false}
              disabled={false}
              iconFloat={null}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Inverted'}
              icon={'arrow-right'}
              color={'black'}
              type={'secondary'}
              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={true}
              loading={false}
              disabled={false}
              iconFloat={null}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Loading'}
              icon={'arrow-right'}
              color={'black'}
              type={'secondary'}
              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={true}
              disabled={false}
              iconFloat={null}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Disabled'}
              icon={'arrow-right'}
              color={'black'}
              type={'secondary'}
              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={true}
              loading={false}
              disabled={true}
              iconFloat={null}
            />
          </div>
        </div>

        <div className={'flex  flex-wrap  justify-between'}>
          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Secondary Small'}
              icon={'arrow-right'}
              color={'black'}
              type={'secondary'}
              fluid={false}
              onClick={null}
              size={'small'}
              inverted={false}
              loading={false}
              disabled={false}
              iconFloat={null}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Secondary Medium'}
              icon={'arrow-right'}
              color={'black'}
              type={'secondary'}
              fluid={false}
              onClick={null}
              size={'medium'}
              inverted={false}
              loading={false}
              disabled={false}
              iconFloat={'left'}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Secondary Large'}
              icon={'arrow-right'}
              color={'black'}
              type={'secondary'}
              fluid={false}
              onClick={null}
              size={'large'}
              inverted={false}
              loading={false}
              disabled={false}
              iconFloat={'right'}
            />
          </div>

          <div
            className={
              'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'
            }
          >
            <Button
              text={'Secondary X-Large'}
              icon={'arrow-right'}
              color={'black'}
              type={'secondary'}
              fluid={false}
              onClick={null}
              size={'x-large'}
              inverted={false}
              loading={false}
              disabled={false}
              iconFloat={'left'}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
