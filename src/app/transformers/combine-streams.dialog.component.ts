import { Component } from '@angular/core';
import { simpleAdd } from './transformer.functions';
import { TransformersService } from './transformers.service';

@Component({
  selector: 'helm-combine-streams',
  templateUrl: './combine-streams.dialog.template.html'
})
export class CombineStreamsDialogComponent {
  public error: string;
  constructor(private transformerService: TransformersService) {}

  private combineStreams(stream1, stream2) {
    if (stream1.units !== stream2.units) {
      this.error = 'U';
    }
    this.transformerService.addTransformedStream([stream1.dataStream, stream2.dataStream], simpleAdd, 'blarg');
  }
}
