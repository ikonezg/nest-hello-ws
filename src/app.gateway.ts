import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  
  @WebSocketServer() wss: Server; 
  
  private logger: Logger = new Logger('AppGateway');
  
  afterInit(server: any) {
    this.logger.log('Initialized!');
  }
  
  
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
  
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
  
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): WsResponse<string> | void  {
    this.logger.log(`Message is : ${payload}`);
    // client.emit('msgToClient', payload); DRUGA VARIJANTA WsResponse-a xOR
    // this.wss.emit('msgToClient', payload); //with return 'void' type Emit to everyone  
    return {event: 'msgToClient', data: 'Hello world!'};
  }
}
