import React, { Component } from "react";
import { Button } from "rendah-pattern-library";

export default class ButtonPreview extends Component {
  constructor(props){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="container  mla  mra">
          <div className={'flex  flex-wrap  justify-center'}>
            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"button"}
                text={"Primary"}
                icon={"facebook"}
                color={"black"}
                primary={true}
                secondary={false}
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
                type={"button"}
                text={"Inverted"}
                icon={"facebook"}
                color={"black"}
                primary={true}
                secondary={false}
                fluid={false}
                onClick={null}
                size={'medium'}
                inverted={true}
                loading={false}
                disabled={false}
                href={null}
                target={null}
                role={'button'}
              />
            </div>

            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"button"}
                text={"Loading"}
                icon={"facebook"}
                color={"black"}
                primary={true}
                secondary={false}
                fluid={false}
                onClick={null}
                size={'medium'}
                inverted={false}
                loading={true}
                disabled={false}
                href={null}
                target={null}
                role={'button'}
              />
            </div>

            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"button"}
                text={"Disabled"}
                icon={"facebook"}
                color={"black"}
                primary={true}
                secondary={false}
                fluid={false}
                onClick={null}
                size={'medium'}
                inverted={true}
                loading={false}
                disabled={true}
                href={null}
                target={null}
                role={'button'}
              />
            </div>
          </div>

          <div className={'flex  flex-wrap  justify-center'}>
            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"button"}
                text={"Primary Small"}
                icon={"facebook"}
                color={"black"}
                primary={true}
                secondary={false}
                fluid={false}
                onClick={null}
                size={'small'}
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
                type={"button"}
                text={"Primary Medium"}
                icon={"facebook"}
                color={"black"}
                primary={true}
                secondary={false}
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
                type={"button"}
                text={"Primary Large"}
                icon={"facebook"}
                color={"black"}
                primary={true}
                secondary={false}
                fluid={false}
                onClick={null}
                size={'large'}
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
                type={"button"}
                text={"Primary X-Large"}
                icon={"facebook"}
                color={"black"}
                primary={true}
                secondary={false}
                fluid={false}
                onClick={null}
                size={'x-large'}
                inverted={false}
                loading={false}
                disabled={false}
                href={null}
                target={null}
                role={'button'}
              />
            </div>
          </div>

          <div className={'flex  flex-wrap  justify-between'}>
            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"a"}
                text={"Secondary"}
                icon={"facebook"}
                color={"black"}
                primary={false}
                secondary={true}
                fluid={false}
                onClick={null}
                size={'medium'}
                inverted={false}
                loading={false}
                disabled={false}
                href={'/'}
                target={'_blank'}
                role={'button'}
              />
            </div>

            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"a"}
                text={"Inverted"}
                icon={"facebook"}
                color={"black"}
                primary={false}
                secondary={true}
                fluid={false}
                onClick={null}
                size={'medium'}
                inverted={true}
                loading={false}
                disabled={false}
                href={'/'}
                target={'_blank'}
                role={'button'}
              />
            </div>

            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"a"}
                text={"Loading"}
                icon={"facebook"}
                color={"black"}
                primary={false}
                secondary={true}
                fluid={false}
                onClick={null}
                size={'medium'}
                inverted={false}
                loading={true}
                disabled={false}
                href={'/'}
                target={'_blank'}
                role={'button'}
              />
            </div>

            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"a"}
                text={"Disabled"}
                icon={"facebook"}
                color={"black"}
                primary={false}
                secondary={true}
                fluid={false}
                onClick={null}
                size={'medium'}
                inverted={true}
                loading={false}
                disabled={true}
                href={'/'}
                target={'_blank'}
                role={'button'}
              />
            </div>
          </div>

          <div className={'flex  flex-wrap  justify-between'}>
            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"a"}
                text={"Secondary Small"}
                icon={"facebook"}
                color={"black"}
                primary={false}
                secondary={true}
                fluid={false}
                onClick={null}
                size={'small'}
                inverted={false}
                loading={false}
                disabled={false}
                href={'/'}
                target={'_blank'}
                role={'button'}
              />
            </div>

            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"a"}
                text={"Secondary Medium"}
                icon={"facebook"}
                color={"black"}
                primary={false}
                secondary={true}
                fluid={false}
                onClick={null}
                size={'medium'}
                inverted={false}
                loading={false}
                disabled={false}
                href={'/'}
                target={'_blank'}
                role={'button'}
              />
            </div>

            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"a"}
                text={"Secondary Large"}
                icon={"facebook"}
                color={"black"}
                primary={false}
                secondary={true}
                fluid={false}
                onClick={null}
                size={'large'}
                inverted={false}
                loading={false}
                disabled={false}
                href={'/'}
                target={'_blank'}
                role={'button'}
              />
            </div>

            <div className={'col-24  col-6-md  flex  justify-center  justify-start-md  align-end  mb4'}>
              <Button
                type={"a"}
                text={"Secondary X-Large"}
                icon={"facebook"}
                color={"black"}
                primary={false}
                secondary={true}
                fluid={false}
                onClick={null}
                size={'x-large'}
                inverted={false}
                loading={false}
                disabled={false}
                href={'/'}
                target={'_blank'}
                role={'button'}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
