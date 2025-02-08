import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    orderHistoryAll(): Promise<import("./entities/order-history.entity").OrderHistoryEntity[]>;
    expireOldOrders(): Promise<void>;
    approveOrder(file: Express.Multer.File, body: any): Promise<import("./entities/order.entity").OrderEntity>;
    approvalTravelDate(body: any): Promise<import("./entities/order.entity").OrderEntity>;
    deleteTicketImage(orderNumber: string): Promise<import("./entities/order.entity").OrderEntity>;
    saveArrayData(data: any[], sendToWhatsApp: boolean): Promise<any>;
    checkAndUpdateExpirationDates(): Promise<{
        message: string;
        updatedOrders: import("./entities/order.entity").OrderEntity[];
    }>;
    checkIfExists(orderNumber?: string, operatorContract?: string): Promise<{
        exists: boolean;
    }>;
    create(createOrderDto: CreateOrderDto): Promise<{
        order: import("./entities/order.entity").OrderEntity[];
        wablas: Promise<{
            apiResponse: any;
            id: number;
            deviceId: string;
            deviceName: string;
            whatsappNumber: string;
            domain: string;
            apiKeyToken: string;
            secretKey: string;
            user: import("../user/entities/user.entity").UserEntity;
        }>;
    } | {
        order: import("./entities/order.entity").OrderEntity[];
        wablas?: undefined;
    }>;
    findAll(status?: string, operator?: number, page?: number, limit?: number, search?: string, dateFrom?: string, dateTo?: string): Promise<{
        total: number;
        totalPages: number;
        hasMore: boolean;
        results: import("./entities/order.entity").OrderEntity[];
    }>;
    statusEnum(): Promise<import("./entities/order.entity").OrderStatus[]>;
    findOne(id: string): Promise<{
        operator: string;
        id: number;
        orderNumber: string;
        patientName: string;
        idCard: string;
        userPhone: string;
        itinerary: string;
        creationDate: Date;
        expirationDate: Date | null;
        travelDate: Date | null;
        approvalDate: Date | null;
        approvalTravelDate: Date | null;
        ticketNumber: string;
        quantity: number;
        approvalQuantity: number;
        authorizationNumber: string;
        operatorContract: string;
        value: number;
        netValue: number;
        origin: string;
        destination: string;
        client: string;
        remarks: string;
        status: import("./entities/order.entity").OrderStatus;
        ticketImage: string;
        backticketHistory: import("./entities/back-ticket.entity").BackTicketEntity[];
        email: string;
        orderHistory: import("./entities/order-history.entity").OrderHistoryEntity[];
    }>;
    findManyByPhone(userPhone: string): Promise<{
        operator: string;
        id: number;
        orderNumber: string;
        patientName: string;
        idCard: string;
        userPhone: string;
        itinerary: string;
        creationDate: Date;
        expirationDate: Date | null;
        travelDate: Date | null;
        approvalDate: Date | null;
        approvalTravelDate: Date | null;
        ticketNumber: string;
        quantity: number;
        approvalQuantity: number;
        authorizationNumber: string;
        operatorContract: string;
        value: number;
        netValue: number;
        origin: string;
        destination: string;
        client: string;
        remarks: string;
        status: import("./entities/order.entity").OrderStatus;
        ticketImage: string;
        backticketHistory: import("./entities/back-ticket.entity").BackTicketEntity[];
        email: string;
        orderHistory: import("./entities/order-history.entity").OrderHistoryEntity[];
    }[]>;
    findOneOrderNumber(orderNumber: string): Promise<{
        operator: string;
        id: number;
        orderNumber: string;
        patientName: string;
        idCard: string;
        userPhone: string;
        itinerary: string;
        creationDate: Date;
        expirationDate: Date | null;
        travelDate: Date | null;
        approvalDate: Date | null;
        approvalTravelDate: Date | null;
        ticketNumber: string;
        quantity: number;
        approvalQuantity: number;
        authorizationNumber: string;
        operatorContract: string;
        value: number;
        netValue: number;
        origin: string;
        destination: string;
        client: string;
        remarks: string;
        status: import("./entities/order.entity").OrderStatus;
        ticketImage: string;
        backticketHistory: import("./entities/back-ticket.entity").BackTicketEntity[];
        email: string;
        orderHistory: import("./entities/order-history.entity").OrderHistoryEntity[];
    }>;
    createBackTicket(orderNumber: string, body: any): Promise<{
        operator: string;
        id: number;
        orderNumber: string;
        patientName: string;
        idCard: string;
        userPhone: string;
        itinerary: string;
        creationDate: Date;
        expirationDate: Date | null;
        travelDate: Date | null;
        approvalDate: Date | null;
        approvalTravelDate: Date | null;
        ticketNumber: string;
        quantity: number;
        approvalQuantity: number;
        authorizationNumber: string;
        operatorContract: string;
        value: number;
        netValue: number;
        origin: string;
        destination: string;
        client: string;
        remarks: string;
        status: import("./entities/order.entity").OrderStatus;
        ticketImage: string;
        backticketHistory: import("./entities/back-ticket.entity").BackTicketEntity[];
        email: string;
        orderHistory: import("./entities/order-history.entity").OrderHistoryEntity[];
    }>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<{
        operator: string;
        id: number;
        orderNumber: string;
        patientName: string;
        idCard: string;
        userPhone: string;
        itinerary: string;
        creationDate: Date;
        expirationDate: Date | null;
        travelDate: Date | null;
        approvalDate: Date | null;
        approvalTravelDate: Date | null;
        ticketNumber: string;
        quantity: number;
        approvalQuantity: number;
        authorizationNumber: string;
        operatorContract: string;
        value: number;
        netValue: number;
        origin: string;
        destination: string;
        client: string;
        remarks: string;
        status: import("./entities/order.entity").OrderStatus;
        ticketImage: string;
        backticketHistory: import("./entities/back-ticket.entity").BackTicketEntity[];
        email: string;
        orderHistory: import("./entities/order-history.entity").OrderHistoryEntity[];
    }>;
    deleteBackTicket(id: string): Promise<import("typeorm").DeleteResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
