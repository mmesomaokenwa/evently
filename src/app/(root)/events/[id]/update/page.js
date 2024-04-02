import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/mongodb/database/actions/event.actions";
import { auth } from "@clerk/nextjs";

export default async function Page({ params: { id } }) {
  const event = await getEventById(id)

  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId;
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm event={event} userId={userId} type="Update" />
      </div>
    </>
  );
}
