import prisma from "../../../../../../../lib/prisma";
import { TColumn } from "../columns";

export async function getCustomers() {
  try {
    const customers = await prisma.user.findMany({
      where: {
        role: "CUSTOMER",
      },
      include: {
        _count: {
          select: {
            Order: true,
          },
        },
      },
    });

    const response: TColumn[] = customers.map((customer) => {
      return {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        totalTransactions: customer._count.Order,
      };
    });

    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
